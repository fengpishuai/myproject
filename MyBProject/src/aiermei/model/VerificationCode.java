package aiermei.model;

import java.awt.Color;
import java.awt.Font;
import java.awt.Graphics;
import java.awt.image.BufferedImage;
import java.util.Random;

public class VerificationCode 
{

	static Color getRandColor(int fc, int bc)
	{
		//给定范围获得随机颜色
		Random random = new Random();
		if(fc > 255)
		{
			fc = 255;
		}
		if(bc > 255)
		{
			bc = 255;
		}
		int r = fc + random.nextInt(bc - fc);
		int g = fc + random.nextInt(bc -fc );
		int b = fc + random.nextInt(bc - fc);
		return new Color(r,g,b);
	}
	
	public static BufferedImage createVerificationImage(int num1,int num2, int funNo)
	{
		//在内存中创建图片
		int width = 100;
		int height = 30;
		BufferedImage image = new BufferedImage(width,height,BufferedImage.TYPE_INT_RGB);
		//获取图片上下文
		Graphics g = image.getGraphics();
		//生成随机类
		Random random = new Random();
		//设定背景色
		g.setColor(getRandColor(240,250));
		g.fillRect(0, 0, width, height);
		//设置字体
		g.setFont(new Font("Times New Roman", Font.PLAIN, 25));
		//随机产生155条干扰线，使图像中的认证码不易被其他程序探测到
		g.setColor(getRandColor(180,230));
		for(int i = 0;i < 10;i++)
		{
			int x = random.nextInt(width);
			int y = random.nextInt(height);
			int xl = random.nextInt(12);
			int yl = random.nextInt(12);
			g.drawLine(x, y, xl, yl);
		}
		
		String funMethod = "";
		switch(funNo)
		{
			case 0:funMethod = "+";
			   break;
			case 1:funMethod = "-";
			   break;
			case 2:funMethod = "x";
			   break;
		}
		String calc = num1 + " " + funMethod + " " + num2 + " = ?";
		g.setColor(new Color(20 + random.nextInt(110), 20 + random.nextInt(110), 20 + random.nextInt(110)));
	    g.drawString(calc, 5, 25);
	    // 图象生效
	    g.dispose();
	    return image;
		
	}
}
