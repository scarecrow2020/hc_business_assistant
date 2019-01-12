package hc.service.impl;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import hc.mapper.UserMapper;
import hc.model.SysDict;
import hc.model.SysUser;
import hc.service.SystemService;
import hc.utils.Const;
import hc.utils.Globals;
import hc.utils.ResultMap;
import hc.utils.UserInfo;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.*;

/**
 * User: Scarecrow
 * Date: 2019/1/3
 * Time: 13:41
 * Description: 系统服务
 */
@Service
@Transactional
public class SystemServiceImpl implements SystemService {

    @Autowired
    private UserMapper userMapper;

    @Override
    @Transactional(readOnly = true)
    public ResultMap login(String userName, String password) {
        QueryWrapper<SysUser> qw = new QueryWrapper<>();
        qw.eq("user_name", userName);
        SysUser user = userMapper.selectOne(qw);
        if (user == null)
            return new ResultMap(false, "用户名错误");
        if (!StringUtils.equals(userName, Const.ROLES.VISITOR)) {
            if (!StringUtils.equals(user.getPassword(), password))
                return new ResultMap(false, "密码错误");
        }
        UserInfo info = new UserInfo();
        info.setName(user.getName());
        info.setJobNumber(user.getJobNumber());
        info.setRole(user.getRole());
        info.setLoginDate(new Date());
        info.setOperateDate(info.getLoginDate());
        info.setUserId(user.getId());
        info.setLoginUuid(UUID.randomUUID().toString());
        synchronized (Globals.USER_INFOS) {
            delGlobalsUserInfo(user.getId());
            Globals.USER_INFOS.put(info.getLoginUuid(), info);
        }
        return new ResultMap(true, info);
    }

    @Override
    public void logout(Long userId) {
        synchronized (Globals.USER_INFOS) {
            delGlobalsUserInfo(userId);
        }
    }

    private void delGlobalsUserInfo(Long userId) {
        List<String> keyList = new ArrayList<>();
        for (Map.Entry<String, UserInfo> entry : Globals.USER_INFOS.entrySet()) {
            if (entry.getValue().getUserId().equals(userId))
                keyList.add(entry.getKey());
        }
        keyList.forEach(key -> Globals.USER_INFOS.remove(key));
    }
}
