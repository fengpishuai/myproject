package aiermei.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import aiermei.dao.DictMapper;
import aiermei.model.DictItem;
import aiermei.service.IDictService;

@Service("dictService")
public class DictServiceImpl implements IDictService {

	private DictMapper dictMapper;
	
	public DictMapper getDictMapper() {
		return dictMapper;
	}

	@Autowired
	public void setDictMapper(DictMapper dictMapper) {
		this.dictMapper = dictMapper;
	}

	@Override
	public List<DictItem> selectProductsById(int dictId) {
		// TODO Auto-generated method stub
		return dictMapper.selectDictItemById(dictId);
	}

	@Override
	public List<DictItem> selectDictItemByGroupId(int groupId) {
		// TODO Auto-generated method stub
		return dictMapper.selectDictItemByGroupId(groupId);
	}

	@Override
	public List selectDictGroupByGroupId(int groupId) {
		// TODO Auto-generated method stub
		return dictMapper.selectDictGroupByGroupId(groupId);
	}

	
}
