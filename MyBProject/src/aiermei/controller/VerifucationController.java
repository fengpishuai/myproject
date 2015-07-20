package aiermei.controller;

import java.awt.image.BufferedImage;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.Random;

import javax.imageio.ImageIO;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;

import aiermei.model.VerificationCode;
@Controller
public class VerifucationController {

	@RequestMapping(value = "/verificationCode")
	public void verificationCode(String picId, HttpServletRequest request, HttpServletResponse response, ModelMap model)
	{
		response.setCharacterEncoding("utf-8");
		response.addHeader("pragma", "no-cache");
		response.setContentType("image/*");
		int num1 = (int) (Math.random()*10);
		int num2 = (int) (Math.random()*10);
		int sum = num1 + num2;
		
		//生成随机类
		Random random = new Random();
		
		int funNo = random.nextInt(3);//产生0-2之间的随机数
	    switch (funNo) 
	    {  
	        case 0: sum = num1 + num2; break;  
	        case 1: sum = num1 - num2; break;  
	        case 2: sum = num1 * num2; break; 
	    }  
	    HttpSession session=request.getSession();
	    session.setAttribute("theCalcResult", String.valueOf(sum));
	          
	    BufferedImage image = VerificationCode.createVerificationImage(num1, num2, funNo);

	    try {
	        ImageIO.write(image, "JPEG", response.getOutputStream());
	    } 
	    catch (IOException e) 
	    {
	        // 错误处理
	        PrintWriter toClient;
	        try 
	        {
	            toClient = response.getWriter(); // 得到向客户端输出文本的对象
	            response.setContentType("text/html;charset=utf-8");
	            toClient.write("生成图片失败!");
	            toClient.close();
	        } 
	        catch (IOException e1) 
	        {
	            e1.printStackTrace();
	        }
	    }
	}
}
