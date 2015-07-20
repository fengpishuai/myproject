package aiermei.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import aiermei.model.DictItem;


public interface DictMapper {

	/**
	 * 通过字典项ID查询字典项
	 * @param dictId
	 * @return
	 */
	List<DictItem> selectDictItemById(@Param(value="dictId") int dictId);
	
	/**
	 * 通过字典组ID查询字典项
	 * @return
	 */
	List<DictItem> selectDictItemByGroupId(@Param(value="groupId") int groupId);
	
	/**
	 * 通过字典组ID查询字典项
	 * @param groupId
	 * @return
	 */
	List selectDictGroupByGroupId(@Param(value="groupId") int groupId);
}
