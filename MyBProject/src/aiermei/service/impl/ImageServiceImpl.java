package aiermei.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import aiermei.dao.ImageMapper;
import aiermei.model.Image;
import aiermei.service.IImageService;

@Service("imageService")
public class ImageServiceImpl implements IImageService {

	private ImageMapper imageMapper;
	
	public ImageMapper getImageMapper() {
		return imageMapper;
	}
	
	@Autowired
	public void setImageMapper(ImageMapper imageMapper) {
		this.imageMapper = imageMapper;
	}

	public List<Image> selectAllImageInfo() {
		// TODO Auto-generated method stub
		return imageMapper.selectAllImageInfo();
	}

}
