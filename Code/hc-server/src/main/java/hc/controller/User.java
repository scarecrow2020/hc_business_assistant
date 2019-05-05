package hc.controller;

import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import hc.model.SysUser;
import hc.service.UserService;
import hc.utils.JsonParam;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.List;

@RestController
@RequestMapping("/user")
public class User {
    @Autowired
    private UserService userService;

    @RequestMapping("/list")
    public Object list(Long page, Long size) {
        return userService.page(new Page(page, size));
    }

//    @RequestMapping("/save")
//    public Object save(@RequestParam SysUser user, Integer a, @RequestParam HashMap<String, String> b) {
//        user = new SysUser();
//        user.setName("123465");
//        return userService.save(user);
//    }

    @RequestMapping("/save")
    public Object save() {
        SysUser user = new SysUser();
        user.setName("123465");
        return userService.save(user);
    }

}
