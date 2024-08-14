package de.webdev.backend.controller;

import de.webdev.backend.model.Catch;
import de.webdev.backend.service.CatchService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/catch")
@RequiredArgsConstructor
public class CatchController {

    private final CatchService catchService;

    @RequestMapping()
    public List<Catch> getAllCatches() {
        return catchService.getAllCatches();
    }

}
