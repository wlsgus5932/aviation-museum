package egovframework.aviation.group.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import egovframework.aviation.group.service.GroupService;
import egovframework.aviation.group.vo.GroupVO;

@Controller
public class GroupController {
	
	@Autowired(required=false)
	private GroupService groupService;
		/**
		 * 그룹 목록을 조회한다
		 * @return String
		 * @exception Exception
		 */
		@RequestMapping(value = "/groupListAjax.do")
	    public String GroupListAjax(HttpServletRequest req, @ModelAttribute("groupVO") GroupVO groupVO, Model model) throws Exception {
			List<GroupVO> groupList = groupService.getGroupList(groupVO);
	    	model.addAttribute("groupList", groupList);
	        return "group/groupList";
	    }    
		
		@RequestMapping(value = "/groupModPopupAjax.do")
	    public String groupModPopupAjax(HttpServletRequest req, @ModelAttribute("groupVO") GroupVO groupVO, Model model) throws Exception {
			List<GroupVO> groupListView = groupService.getGroupList(groupVO);
			if(groupListView.size() >0) {
				groupVO.setGroup_idx(groupListView.get(0).getGroup_idx());	
				groupVO.setGroup_nm(groupListView.get(0).getGroup_nm());
				groupVO.setRemark(groupListView.get(0).getRemark());
				groupVO.setAdmin(groupListView.get(0).getAdmin());
			}
//	    	model.addAttribute("groupListView", groupListView);
	    	
	        return "jsonView";
	    }    
		
		@RequestMapping(value = "/groupinsert.do")
	    public String GroupInsert(HttpServletRequest req, @ModelAttribute("groupVO") GroupVO groupVO, Model model) throws Exception {
			
			int result = groupService.insertGroup(groupVO);
			String success = "";
			
			if(result > 0) {
				 success = "success";
			}
	        return "jsonView";
	    }   
	
		@RequestMapping(value = "/groupupdate.do")
	    public String GroupUpdate(HttpServletRequest req, @ModelAttribute("groupVO") GroupVO groupVO, Model model) throws Exception {
			
			int result = groupService.updateGroup(groupVO);
			String success = "";
			
			if(result > 0) {
				 success = "success";
			}
	        return "jsonView";
	    } 
		
		@RequestMapping(value = "/groupdelete.do")
	    public String GroupDelete(HttpServletRequest req, @ModelAttribute("groupVO") GroupVO groupVO, Model model) throws Exception {
			int result = groupService.updateUserGroup(groupVO);
			int result2 = groupService.deleteAuthority(groupVO);
			int result3 = groupService.deleteGroup(groupVO);
			String success = "";
			
			if(result > 0 && result2 > 0 && result3 > 0) {
				 success = "success";
			}
	        return "jsonView";
	    } 
}
