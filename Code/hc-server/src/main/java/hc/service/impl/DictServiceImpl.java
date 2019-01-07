package hc.service.impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import hc.mapper.SysDictMapper;
import hc.model.SysDict;
import hc.service.DictService;
import org.springframework.stereotype.Service;

@Service
public class DictServiceImpl extends ServiceImpl<SysDictMapper, SysDict> implements DictService {

}
