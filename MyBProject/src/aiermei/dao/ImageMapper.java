package aiermei.dao;

import java.util.List;



import org.apache.ibatis.annotations.Param;

import aiermei.model.Image;

public interface ImageMapper {

	/**
	 * 查出所有图片信息
	 * @return
	 */
	List<Image> selectAllImageInfo();
}
