package aiermei.controller;

import java.io.File;
import java.io.IOException;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class FileLoadController 
{
	@RequestMapping(value = "/add") 
	public ModelAndView addGoods( HttpServletRequest request, HttpSession session, @RequestParam("file") MultipartFile file) 
	{  
		    ModelAndView mav = new ModelAndView();  
		    if (!file.isEmpty()) 
		    {  
		  
		        String path = request.getContextPath() + "/jsp/";  
		        String fileName = file.getOriginalFilename();  
		  
		        try 
		        {  
		            String tomcatPath = request.getSession().getServletContext().getRealPath("/image//"); //得到保存的路径  
		            File f = new File(tomcatPath);
		            if(!f.exists())
		            {
		            	f.mkdirs();
		            }
		            if(!fileName.endsWith(".jpg"))
		            {
		            	return mav;
		            }
		            FileCopyUtils.copy(file.getBytes(), new File(tomcatPath +"/" +  fileName));//FileCopyUtils来自org.springframework.util.FileCopyUtils  
		  
		        } 
		        catch (IOException e) 
		        {  
		            // TODO Auto-generated catch block  
		            e.printStackTrace();  
		        }  
		  
		    }  
		  
		    mav.setViewName("test");  
		    return mav;  
		  
		}  
}
