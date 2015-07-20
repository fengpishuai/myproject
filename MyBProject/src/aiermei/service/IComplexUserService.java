package aiermei.service;

import javax.jws.WebParam;
import javax.jws.WebService;
import javax.jws.soap.SOAPBinding;
import javax.jws.soap.SOAPBinding.*;

import aiermei.pojo.User;

/**
 * 定制客户端请求WebService所需要的接口
 * @author fengpishuai
 *
 */
@WebService
@SOAPBinding(style = Style.RPC)
public interface IComplexUserService {
    
    public User getUserByName(@WebParam(name = "name") String name);
    
    public void setUser(User user);
}
