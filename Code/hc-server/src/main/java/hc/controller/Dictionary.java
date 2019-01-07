package hc.controller;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import hc.model.SysDict;
import hc.service.DictService;
import hc.utils.Const;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * 字典
 */
@RestController
@RequestMapping("/sys")
public class Dictionary {
    @Autowired
    private DictService dictService;

    @RequestMapping("/dictOptions")
    public Object dictOptions(String type) {
        QueryWrapper<SysDict> qw = new QueryWrapper<>();
        qw.select("dict_key as id", "dict_value as name").eq("type", type)
                .notIn("dict_key", Const.ROLES.ADMIN, Const.ROLES.VISITOR);
        return dictService.listMaps(qw);
    }
}
