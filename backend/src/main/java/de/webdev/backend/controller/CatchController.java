package de.webdev.backend.controller;

import de.webdev.backend.model.Catch;
import de.webdev.backend.service.CatchService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/catch")
@RequiredArgsConstructor
public class CatchController {

    private final CatchService catchService;

    @GetMapping()
    public List<Catch> getAllCatches() {
        return catchService.getAllCatches();
    }

    @PostMapping
    public Catch saveCatch(@RequestBody Catch newCatch) {
        return catchService.saveCatch(newCatch);
    }
}
