package aiermei.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import aiermei.dao.ProductMapper;
import aiermei.model.Products;
import aiermei.service.IProductService;

@Service("productService")
public class ProductServiceImpl implements IProductService {

	private ProductMapper productMapper;
	
	public ProductMapper getProductMapper() {
		return productMapper;
	}
	@Autowired
	public void setProductMapper(ProductMapper productMapper) {
		this.productMapper = productMapper;
	}

	@Override
	public List selectProductsByPage(Integer startPos, Integer pageSize,
			Integer userId) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public int getProductsCount(int loginUserId) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public List<Products> selectProductsById(String productId) {
		return productMapper.selectProductsById(productId);
	}
	
	public static void main(String[] args)
	{
		ProductServiceImpl productservice = new ProductServiceImpl();
		
		List<Products> products = productservice.selectProductsById("1");
		
		
	}

}
