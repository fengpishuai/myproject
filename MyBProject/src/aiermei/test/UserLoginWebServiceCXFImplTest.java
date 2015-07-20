package aiermei.test;

import javax.annotation.Resource;

import org.apache.cxf.jaxws.JaxWsProxyFactoryBean;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.AbstractJUnit4SpringContextTests;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import aiermei.pojo.User;
import aiermei.service.IComplexUserService;
import aiermei.service.impl.ComplexUserService;

@RunWith(SpringJUnit4ClassRunner.class)  
@ContextConfiguration(locations={"classpath:applicationContext.xml"})  
public class UserLoginWebServiceCXFImplTest extends
		AbstractJUnit4SpringContextTests {

	@Resource
	private ComplexUserService complexUserService;
	
	@Test
	public void testLogin() { 
	
	}
}
