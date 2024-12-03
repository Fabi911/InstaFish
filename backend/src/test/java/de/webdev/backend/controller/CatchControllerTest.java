package de.webdev.backend.controller;

import de.webdev.backend.repository.CatchRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;


@SpringBootTest
@AutoConfigureMockMvc
class CatchControllerTest {

	@Autowired
	private MockMvc mockMvc;

	@Autowired
	private CatchRepository catchRepository;

	@Test
	void getAllCatches() throws Exception {
		mockMvc.perform(MockMvcRequestBuilders.get("/api/catch"))
				.andExpect(MockMvcResultMatchers.status().isOk())
				.andExpect(MockMvcResultMatchers.content().json("[]"));
	}


	@DirtiesContext
	@Test
	void saveCatch_with_a_catch() throws Exception {
		mockMvc.perform(MockMvcRequestBuilders.post("/api/catch")
						.contentType("application/json")
						.content(
								"""
										        {
										                "id": "66b265cd503c9158469b52522",
										                "date": "2024-08-06",
										                  "location": "Leineck",
										                "species": "Karpfen",
										                "size": 50.0,
										                "weight": 3.0,
										                 "image": "",
										        "favorite": "false",
										        "notes": [
										                    ""
										                ],
										                "author": "user2@test.de",
										                "methode":"",
										                "bait": ""
										            }
										"""
						))
				.andExpect(MockMvcResultMatchers.status().isOk())
				.andExpect(MockMvcResultMatchers.content().json("""                    
						    {
						                                                "id": "66b265cd503c9158469b52522",
						                                                "date": "2024-08-06",
						                                                "location": "Leineck",
						                                                "species": "Karpfen",
						                                                "size": 50.0,
						                                                "weight": 3.0,
						                                                "image": "",
						                                                "favorite": "false",
						                                                "notes": [
						                                                    ""
						                                                ],
						                                                "author": "user2@test.de",
						                                                "methode":"",
						                                                "bait": ""
						  }
						"""
				));
	}
}