package aiermei.model;

/**
 * 字典项
 * @author fengpishuai
 *
 */
public class DictItem {

	private int dictId;
	
	private String dictName;
	
	private int groupId;
	
	private String status;

	public int getDictId() {
		return dictId;
	}

	public void setDictId(int dictId) {
		this.dictId = dictId;
	}

	public String getDictName() {
		return dictName;
	}

	public void setDictName(String dictName) {
		this.dictName = dictName;
	}

	public int getGroupId() {
		return groupId;
	}

	public void setGroupId(int groupId) {
		this.groupId = groupId;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}
	
}
