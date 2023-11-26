package com.alcohol.sul;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.ui.Model;

import com.alcohol.sul.main.product.ProductDTO;

@Repository
public class HomeDAO {
	
	@Autowired
	private SqlSession sqlSession;
	
	private final String NAMESPACE = "com.alcohol.sul.HomeDAO.";
	
	// best 상품(리뷰기준)
	public List<ProductDTO> getBestReview ()throws Exception{
		return sqlSession.selectList(NAMESPACE+"getBestReview");
	}
	
	public List<ProductDTO> getRecommendListTypeOne()throws Exception{
		return sqlSession.selectList(NAMESPACE+"getRecommendListTypeOne");
	}
	
	public List<ProductDTO> getRecommendListTypeTwo()throws Exception{
		return sqlSession.selectList(NAMESPACE+"getRecommendListTypeTwo");
	}
	
	public Long getReviewCount(Long productNum) throws Exception  {
		return sqlSession.selectOne(NAMESPACE+"getReviewCount", productNum);
	}
	
	
}