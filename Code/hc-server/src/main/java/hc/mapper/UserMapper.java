package hc.mapper;


import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import hc.model.SysUser;

/**
 * SysUser: Scarecrow
 * Date: 2018/11/6
 * Time: 10:23
 * Description:
 */
public interface UserMapper extends BaseMapper<SysUser> {
    SysUser getUserByUserName(String userName);
}
