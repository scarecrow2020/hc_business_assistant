package hc.service.impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import hc.mapper.UserMapper;
import hc.model.SysUser;
import hc.service.UserService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class UserServiceImpl extends ServiceImpl<UserMapper, SysUser> implements UserService {

    @Override
    @Transactional(readOnly = true)
    public SysUser getUser(Long id){
       return baseMapper.selectById(id);
    }
}
