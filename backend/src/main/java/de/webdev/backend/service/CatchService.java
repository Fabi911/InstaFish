package de.webdev.backend.service;

import de.webdev.backend.model.Catch;
import de.webdev.backend.repository.CatchRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CatchService {

    private final CatchRepository catchRepository;

    public List<Catch> getAllCatches() {
        return catchRepository.findAll();
    }

}
