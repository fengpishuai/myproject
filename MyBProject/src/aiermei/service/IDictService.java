package aiermei.service;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import aiermei.model.DictItem;

public interface IDictService {
	
	/**
	 * 通过字典项ID查询字典项
	 * @param dictId
	 * @return
	 */
	List<DictItem> selectProductsById(int dictId);
	
	/**
	 * 通过字典组ID查询字典项
	 * @return
	 */
	List<DictItem> selectDictItemByGroupId(int groupId);

	/**
	 * 通过字典组ID查询字典项
	 * @param groupId
	 * @return
	 */
	List selectDictGroupByGroupId(int groupId);

}
