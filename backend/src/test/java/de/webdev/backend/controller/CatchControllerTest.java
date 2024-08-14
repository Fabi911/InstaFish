package de.webdev.backend.controller;

import de.webdev.backend.model.Catch;
import de.webdev.backend.repository.CatchRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

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
    void getAllCatches_with_a_list() throws Exception {
        Catch catch1 = new Catch("1", "2021-08-01", "Hamburg", "Zander", 50.0, 2.0, "image.jpg", "true", List.of("note1", "note2"), "author", "method", "bait");
        Catch catch2 = new Catch("2", "2021-08-02", "Berlin", "Hecht", 60.0, 3.0, "image.jpg", "false", List.of("note1", "note2"), "author", "method", "bait");
        Catch catch3 = new Catch("3", "2021-08-03", "München", "Barsch", 40.0, 1.0, "image.jpg", "true", List.of("note1", "note2"), "author", "method", "bait");

        catchRepository.save(catch1);
        catchRepository.save(catch2);
        catchRepository.save(catch3);

        mockMvc.perform(MockMvcRequestBuilders.get("/api/catch"))
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(MockMvcResultMatchers.content().json("[{\"id\":\"1\",\"date\":\"2021-08-01\",\"location\":\"Hamburg\",\"species\":\"Zander\",\"size\":50.0,\"weight\":2.0,\"image\":\"image.jpg\",\"favorite\":\"true\",\"notes\":[\"note1\",\"note2\"],\"author\":\"author\",\"method\":\"method\",\"bait\":\"bait\"},{\"id\":\"2\",\"date\":\"2021-08-02\",\"location\":\"Berlin\",\"species\":\"Hecht\",\"size\":60.0,\"weight\":3.0,\"image\":\"image.jpg\",\"favorite\":\"false\",\"notes\":[\"note1\",\"note2\"],\"author\":\"author\",\"method\":\"method\",\"bait\":\"bait\"},{\"id\":\"3\",\"date\":\"2021-08-03\",\"location\":\"München\",\"species\":\"Barsch\",\"size\":40.0,\"weight\":1.0,\"image\":\"image.jpg\",\"favorite\":\"true\",\"notes\":[\"note1\",\"note2\"],\"author\":\"author\",\"method\":\"method\",\"bait\":\"bait\"}]"));
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