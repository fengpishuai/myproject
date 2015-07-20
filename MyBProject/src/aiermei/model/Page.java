package aiermei.model;

import java.io.Serializable;

public class Page implements Serializable  {

	/**
	 * 
	 */
	private static final long serialVersionUID = 7174775289721541103L;

	private int pageNow = 1;//当前页数
	
	//每页显示记录的条数
	private int pageSize = 4;
	
	//总的记录条数
	private int totalCount;
	
	//总的页数
	private int totalPageCount;
	
	//开始位置，从0开始
	private int startPos;
	
	//是否有首页
	private boolean hasFirst;
	
	//是否有前一页
	private boolean hasPre;
	
	//是否有下一页
	private boolean hasNext;
	
	//是否有后一页
	private boolean hasLast;

	public int getPageNow() {
		return pageNow;
	}
	
	

	public Page(int pageNow, int totalCount) {
		super();
		this.pageNow = pageNow;
		this.totalCount = totalCount;
	}



	public void setPageNow(int pageNow) {
		this.pageNow = pageNow;
	}

	

	public int getPageSize() {
		return pageSize;
	}



	public void setPageSize(int pageSize) {
		this.pageSize = pageSize;
	}



	public int getTotalCount() {
		return totalCount;
	}

	public void setTotalCount(int totalCount) {
		this.totalCount = totalCount;
	}
	/**
	 * 取得总页数，总页数=总记录数/总页数
	 * @return
	 */
	public int getTotalPageCount() {
		totalPageCount = getTotalCount() / getPageSize();
		return (totalCount % pageSize == 0) ? totalPageCount : totalPageCount+1;
	}

	public void setTotalPageCount(int totalPageCount) {
		this.totalPageCount = totalPageCount;
	}
	/**
	 * 取得选择记录的初始位置
	 * @return
	 */
	public int getStartPos() {
		return (pageNow - 1) * pageSize;
	}

	public void setStartPos(int startPos) {
		this.startPos = startPos;
	}
	/**
	 * 是否是第一页
	 * @return
	 */
	public boolean isHasFirst() {
		return (pageNow == 1) ? false : true;
	}

	public void setHasFirst(boolean hasFirst) {
		this.hasFirst = hasFirst;
	}

	/**
	 * 是否有首页
	 * @return
	 */
	public boolean isHasPre() {
		return isHasFirst() ? true : false;
	}

	public void setHasPre(boolean hasPre) {
		this.hasPre = hasPre;
	}

	/**
	 * 是否有下一页
	 * @return
	 */
	public boolean isHasNext() {
		//如果哟尾页就有下一页，因为有尾页表明不是最后一页
		return isHasLast() ? true : false;
	}

	public void setHasNext(boolean hasNext) {
		this.hasNext = hasNext;
	}

	/**
	 * 是否有尾页
	 * @return
	 */
	public boolean isHasLast() {
		//如果不是最后一页就有尾页
		return (pageNow == getTotalCount()) ? false :true;
	}

	public void setHasLast(boolean hasLast) {
		this.hasLast = hasLast;
	}

}
