package aiermei.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import net.sf.json.JSONString;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import aiermei.model.Image;
import aiermei.service.IImageService;

import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;

@Controller
public class ImageController {

	private IImageService imageService;

	@Autowired
	public void setImageService(IImageService imageService) {
		this.imageService = imageService;
	}
	/**
	 * 查看图片库中的所有数据
	 * @param model
	 * @return
	 */
	@RequestMapping(value = "/selectAllImageInfo", method = RequestMethod.POST)
	public @ResponseBody String  selectAllImageInfo(Model model)
	{
		List<Image> imageBean = imageService.selectAllImageInfo();
		JSONArray jsonObject = (JSONArray) JSONArray.toJSON(imageBean);
		String jsonString = JSONObject.toJSONString(imageBean);
		ModelAndView  mav = new ModelAndView("jsonObject");
		model.addAttribute("imageBean",imageBean);
		return jsonString; 
	}
	@RequestMapping(value = "/updateImageInfo")
	public String updateImageInfo(Model model)
	{
		@SuppressWarnings("unused")
		List<Image> imageBean = imageService.selectAllImageInfo();
		return "/admin/imgmanage";
	}
	
	@RequestMapping("/list")
	   public String list(Model model)
	   {
		List<Image> imageBean = imageService.selectAllImageInfo();
		String jsonString = JSONObject.toJSONString(imageBean);
	       model.addAttribute("list",imageBean);
		model.addAttribute("jsonString", jsonString);
	       return "/admin/imgmanage";
	   }
	
	@RequestMapping(value = "/report_hz_json")
	public @ResponseBody JSONArray getHZData_Json(Model model) {
		JSONArray jsonArray = new JSONArray();
	
 
		return jsonArray;
	}
}
