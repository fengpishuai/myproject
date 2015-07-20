package aiermei.service.impl;

import java.util.Date;

import javax.jws.WebService;
import javax.jws.soap.SOAPBinding;
import javax.jws.soap.SOAPBinding.Style;

import aiermei.pojo.User;
import aiermei.service.IComplexUserService;

@WebService
@SOAPBinding(style = Style.RPC)
@SuppressWarnings("deprecation")
public class ComplexUserService implements IComplexUserService {

	@Override
	public User getUserByName(String name) {
		User user = new User();
        user.setId(new Date().getSeconds());
        user.setName(name);
        user.setAddress("china");
        user.setEmail(name + "@hoo.com");
        return user;
	}

	@Override
	public void setUser(User user) {
		System.out.println("############Server setUser###########");
        System.out.println("setUser:" + user);
	}

}
