package aiermei.test;

import aiermei.pojo.User;
import aiermei.service.IComplexUserService;
import org.apache.cxf.jaxws.JaxWsProxyFactoryBean;

public class SpringUsersWsClient {

	public static void main(String[] args) {
        //调用WebService
        JaxWsProxyFactoryBean factory = new JaxWsProxyFactoryBean();
        factory.setServiceClass(IComplexUserService.class);
        factory.setAddress("http://localhost:8080/MyBProject/Users");
        
        IComplexUserService service = (IComplexUserService) factory.create();
        
        System.out.println("#############Client getUserByName##############");
        User user = service.getUserByName("hoojo");
        System.out.println(user);
        
        user.setAddress("China-Guangzhou");
        service.setUser(user);
    }
}
