package de.webdev.backend.service;

import de.webdev.backend.model.Catch;
import de.webdev.backend.repository.CatchRepository;
import org.junit.jupiter.api.Test;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

class CatchServiceTest {

    private final CatchRepository mockCatchRepository = mock(CatchRepository.class);

    @Test
    void getAllCatches() {
        //Then
        Catch catch1 = new Catch("1", "2021-08-01", "Hamburg", "Zander", 50.0, 2.0, "image.jpg", "true", List.of("note1", "note2"), "author", "method", "bait");
        Catch catch2 = new Catch("2", "2021-08-02", "Berlin", "Hecht", 60.0, 3.0, "image.jpg", "false", List.of("note1", "note2"), "author", "method", "bait");
        Catch catch3 = new Catch("3", "2021-08-03", "München", "Barsch", 40.0, 1.0, "image.jpg", "true", List.of("note1", "note2"), "author", "method", "bait");
        List<Catch> expected = List.of(catch1, catch2, catch3);
        when(mockCatchRepository.findAll()).thenReturn(expected);

        CatchService catchService = new CatchService(mockCatchRepository);

        //When
        List<Catch> actual = catchService.getAllCatches();

        //Then
        assertEquals(expected, actual);
        verify(mockCatchRepository).findAll();
    }

    @Test
    void saveCatch() {
        // Then
        Catch newCatch = new Catch("1", "2021-08-01", "Hamburg", "Zander", 4.5, 2.0, "image.jpg", "true", List.of("note1", "note2"), "author", "method", "bait");
        when(mockCatchRepository.save(newCatch)).thenReturn(newCatch);

        CatchService catchService = new CatchService(mockCatchRepository);

        // When
        Catch actual = catchService.saveCatch(newCatch);
        verify(mockCatchRepository).save(newCatch);
    }
}