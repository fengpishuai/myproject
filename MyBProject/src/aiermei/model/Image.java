package aiermei.model;

import java.util.Date;

public class Image {

	private int imgId;
	
	private String imgName;
	
	private Date createTime;
	
	private String imgType;
	
	private String imgPath;
	
	private int up;
	
	private int down;
	
	private String status;

	public int getImgId() {
		return imgId;
	}

	public void setImgId(int imgId) {
		this.imgId = imgId;
	}

	public String getImgName() {
		return imgName;
	}

	public void setImgName(String imgName) {
		this.imgName = imgName;
	}

	public Date getCreateTime() {
		return createTime;
	}

	public void setCreateTime(Date createTime) {
		this.createTime = createTime;
	}

	public String getImgType() {
		return imgType;
	}

	public void setImgType(String imgType) {
		this.imgType = imgType;
	}

	public String getImgPath() {
		return imgPath;
	}

	public void setImgPath(String imgPath) {
		this.imgPath = imgPath;
	}

	public int getUp() {
		return up;
	}

	public void setUp(int up) {
		this.up = up;
	}

	public int getDown() {
		return down;
	}

	public void setDown(int down) {
		this.down = down;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	@Override
	public String toString() {
		return "Image [imgId=" + imgId + ", imgName=" + imgName
				+ ", createTime=" + createTime + ", imgType=" + imgType
				+ ", imgPath=" + imgPath + ", up=" + up + ", down=" + down
				+ ", status=" + status + "]";
	}
	
	
}
