package aiermei.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import aiermei.model.Products;



public interface ProductMapper {

	/**
	 * 使用注解方式传入多个参数，用户产品分页，通过登录用户ID查询
	 * @param startPos
	 * @param pageSize
	 * @param userId
	 * @return
	 */
	//List<Products> selectProductsByPage(@Param(value="startPos") Integer startPos,@Param(value="pageSize") Integer pageSize,@Param(value="userId") Integer userId);
	/**
	 * 取得产品数量信息，通过登录用户ID查询
	 * @param userId
	 * @return
	 */
	//long getProductsCount(@Param(value="userId") Integer userId);
	
	List<Products> selectProductsById(@Param(value="productId") String productId);
	
	/**
	 * 分页显示商品
	 * @param request
	 * @param model
	 * @param loginUserId
	 */
	//void showProductsByPage(HttpServletRequest request,Model model,int loginUserId);
}
