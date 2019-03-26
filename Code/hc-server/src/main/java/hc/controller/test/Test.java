package hc.controller.test;

import hc.model.SysUser;
import hc.service.UserService;
import hc.utils.JsonParam;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/test")
public class Test {

    @Autowired
    private UserService userService;
    @RequestMapping("/helloWorld")
    public String test () {
        return "helloWorld";
    }

    @RequestMapping("/helloWorld0")
    public void test0 (@JsonParam List<SysUser> a) {
        System.out.println(a);
        // return userService.getUser(1L);
    }

    @RequestMapping("/helloWorld1")
    public void test1 (@JsonParam Map<String, String> a) {
        System.out.println(a.keySet());
        // return userService.getUser(1L);
    }
    @RequestMapping(value = "/helloWorld2")
    public void test2 (@JsonParam SysUser a) {
        System.out.println(a);
        // return userService.getUser(1L);
    }
    @RequestMapping("/helloWorld3")
    public void test3 (Integer a) {
        System.out.println(a);
        // return userService.getUser(1L);
    }
    @PostMapping("/helloWorld4")
    public void test4 (Integer a, String b, Boolean c, @JsonParam SysUser user,
                       @JsonParam List<SysUser> users, @JsonParam Map<String, Object> map,
                       @JsonParam List<Map<String, Object>> maps) {
        System.out.println(a);
        System.out.println(b);
        System.out.println(c);
        // return userService.getUser(1L);
    }
    public static void main(String[] args) {

    }
}
