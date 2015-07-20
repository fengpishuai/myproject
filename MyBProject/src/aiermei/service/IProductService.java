package aiermei.service;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;

import aiermei.model.Products;

@Controller
public interface IProductService {
	
	List selectProductsByPage(Integer startPos, Integer pageSize, Integer userId);
	
	int getProductsCount(int loginUserId);
	
	List<Products> selectProductsById(String productId);
}
