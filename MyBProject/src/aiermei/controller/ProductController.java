package aiermei.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import aiermei.model.DictItem;
import aiermei.model.Products;
import aiermei.service.IDictService;
import aiermei.service.IProductService;

@Controller
public class ProductController {

	private IProductService productService;
	
//	private IDictService dictService;
	
	@Autowired
	public void setProductService(IProductService productService) {
		this.productService = productService;
	}
	
//	@Autowired
//	public void setDictService(IDictService dictService) {
//		this.dictService = dictService;
//	}


//	@RequestMapping(value = "/selectProductsById")
//	public ModelAndView selectProductsById()
//	{
//		ModelAndView mav = new ModelAndView(); 
//		int groupId = 4; 
//		@SuppressWarnings("unused")
//		List dictitem = dictService.selectDictGroupByGroupId(groupId);
//		@SuppressWarnings("unused") 
//		List<Products> products = productService.selectProductsById("1");
//		return mav;
//	}
}
