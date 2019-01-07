package hc.service;

import com.baomidou.mybatisplus.extension.service.IService;
import hc.model.SysUser;

public interface UserService extends IService<SysUser> {
    SysUser getUser(Long id);
}
