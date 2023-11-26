package com.alcohol.sul;

import java.text.DateFormat;
import java.util.Date;
import java.util.List;
import java.util.Locale;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.alcohol.sul.main.product.ProductDTO;
import com.alcohol.sul.main.product.ProductService;

/**
 * Handles requests for the application home page.
 */
@Controller
public class HomeController {
	@Autowired
	private HomeService homeService;
	
	@Autowired
	private ProductService productService;
	
	private static final Logger logger = LoggerFactory.getLogger(HomeController.class);
	
	/**
	 * Simply selects the home view to render by returning its name.
	 */
	@RequestMapping(value = "/", method = RequestMethod.GET)
	public String home(Locale locale, Model model, ProductDTO productDTO) throws Exception{
		Date date = new Date();
		DateFormat dateFormat = DateFormat.getDateTimeInstance(DateFormat.LONG, DateFormat.LONG, locale);
		
		String formattedDate = dateFormat.format(date);
		
		
		List<ProductDTO> rl01 = homeService.getRecommendListTypeOne();
		for(ProductDTO p : rl01) {
			p.setReviewCount(homeService.getReviewCount(p.getProductNum()));
		}
		
		List<ProductDTO> rl02 = homeService.getRecommendListTypeTwo();
		for(ProductDTO p : rl02) {
			p.setReviewCount(homeService.getReviewCount(p.getProductNum()));
		}
		
		model.addAttribute("serverTime", formattedDate );
		model.addAttribute("rl01", rl01);
		model.addAttribute("rl02", rl02);
		
		return "home";
	}
	
	@GetMapping("/bestReview")
	public String getBestReview(Model model)throws Exception{
		List<ProductDTO> ar = homeService.getBestReview();
		model.addAttribute("list", ar);

//		System.out.println(ar.size());
		
		return "product/list";
	}
}