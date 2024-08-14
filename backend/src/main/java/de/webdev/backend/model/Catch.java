package de.webdev.backend.model;

import java.util.List;

public record Catch(
        String id,
        String date,
        String species,
        double size,
        double weight,
        String location,
        String bait,
        String image,
        List<String> notes,
        String favorite,
        String author
) {
}
