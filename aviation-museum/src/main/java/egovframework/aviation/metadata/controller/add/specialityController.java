package egovframework.aviation.metadata.controller.add;

import java.io.File;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import egovframework.aviation.metadata.service.SpecialityService;
import egovframework.aviation.metadata.vo.image.ImageVO;
import egovframework.aviation.metadata.vo.param.ImageParamVO;
import egovframework.aviation.metadata.vo.param.SpecialityParamVO;
import egovframework.aviation.metadata.vo.speciality.SpecialityVO;
import egovframework.aviation.paging.Criteria;
import egovframework.aviation.paging.PageMaker;

@Controller
public class specialityController {
	
	@Autowired
	private SpecialityService service;
	
	String local_path = "D:\\uploadtest\\";
	String path = "files/speciality/";
	
	@GetMapping("/getSpeciality.do")
	public String getSpeciality(ModelMap model, @ModelAttribute SpecialityParamVO param, @ModelAttribute Criteria cri) throws Exception {
		try {
			int perPageNum = service.getSpecialityCnt(param);
			if(param.getPerPageNum() != 0) {
				int criPerPageNum = param.getPerPageNum();
				cri.setPerPageNum(criPerPageNum);
			}
			PageMaker pageMaker = new PageMaker();
		    pageMaker.setCri(cri);
		    pageMaker.setTotalCount(perPageNum);
		    param.setPageStart(cri.getPageStart());
		    param.setPerPageNum(cri.getPerPageNum());
			
			List<SpecialityVO> list = service.getSpeciality(param);
			model.addAttribute("specialityList", list);
			model.addAttribute("perPageNum", perPageNum);
			model.addAttribute("pageMaker", pageMaker);
		} catch (Exception e) {
			
		}
		return "metadata/add/speciality/specialityList";
	}
	
	@GetMapping("/getSpecialitySearch.do")
	public String getSpecialitySearch(ModelMap model, @ModelAttribute SpecialityParamVO param, @ModelAttribute Criteria cri) throws Exception {
		try {
			int perPageNum = service.getSpecialityCnt(param);
			if(param.getPerPageNum() != 0) {
				int criPerPageNum = param.getPerPageNum();
				cri.setPerPageNum(criPerPageNum);
			}
			PageMaker pageMaker = new PageMaker();
		    pageMaker.setCri(cri);
		    pageMaker.setTotalCount(perPageNum);
		    param.setPageStart(cri.getPageStart());
		    param.setPerPageNum(cri.getPerPageNum());
			
			List<SpecialityVO> list = service.getSpeciality(param);
			model.addAttribute("specialityList", list);
			model.addAttribute("perPageNum", perPageNum);
			model.addAttribute("pageMaker", pageMaker);
		} catch (Exception e) {
			
		}
		return "metadata/add/speciality/specialitySearchList";
	}
	
	@GetMapping("/getSpecialityData.do")
	public String getSpecialityData(ModelMap model, @RequestParam("speciality_idx") int speciality_idx) throws Exception {
		System.out.println(speciality_idx);
		try {
			List<SpecialityVO> list = service.getSpecialityData(speciality_idx);
			
			model.addAttribute("specialityList", list);
		} catch (Exception e) {
			
		}
		return "jsonView";
	}
	
	@PostMapping("/setSpeciality.do")
	@ResponseBody
	public String setSpecaility(@ModelAttribute SpecialityParamVO param) throws Exception {
		try {
			System.out.println("param::"+param);
			String fileName = null;
			String filePath = "files\\speciality\\";
	        MultipartFile uploadFile = param.getSpc_uploadFile();
	        
	        if (!uploadFile.isEmpty()) {
	            fileName = uploadFile.getOriginalFilename();
	            System.out.println("ori:::"+fileName);
	            //String ext = FilenameUtils.getExtension(originalFileName); // ????????? ?????????
	            //UUID uuid = UUID.randomUUID(); // UUID ?????????
	            //fileName = uuid + "." + ext;
	            uploadFile.transferTo(new File("D:\\uploadtest\\"+filePath + fileName));
	            param.setSpc_file_nm(fileName);
	            param.setSpc_file_path(filePath);
	        }
	        
	        
	        int x = service.setSpeciality(param);
	        
	        return "success";
		} catch (Exception e) {
			return "error";
		}
	}
	
	@PostMapping("/updateSpeciality.do")
	@ResponseBody
	public String updateSpecaility(@ModelAttribute SpecialityParamVO param) throws Exception {
		String result = "error";
		System.out.println(param);
		try {
			String fileName = null;
			String filePath = "D:\\uploadtest\\";
	        MultipartFile uploadFile = param.getSpc_uploadFile();
	        
	        if (!uploadFile.isEmpty()) {
	        	File file = new File(param.getSpc_file_path()+param.getSpc_file_nm());
				boolean delete = file.delete();
				
	            fileName = uploadFile.getOriginalFilename();
	            System.out.println("ori:::"+fileName);
	            uploadFile.transferTo(new File(filePath + fileName));
	            param.setSpc_file_nm(fileName);
	            param.setSpc_file_path(filePath);
	        }
	        
	        
	        int x = service.updateSpeciality(param);
	        if(x != 0) {
	        	result = "success";
	        }
	        
	        return result;
		} catch (Exception e) {
			return result;
		}
	}
	
	@PostMapping("/deleteSpeciality.do")
	@ResponseBody
	public String deleteSpecialityCode(@ModelAttribute SpecialityParamVO param) throws Exception {
		String result = "error";
		try {
			int x = service.deleteSpeciality(param);
			
			if(x != 0) {
				File file = new File(local_path+param.getSpc_file_path()+param.getSpc_file_nm());
				file.delete();
				result = "success";
			}
			
			return result;
		} catch (Exception e) {
			return result;
		}
	}
	
	
	

}
