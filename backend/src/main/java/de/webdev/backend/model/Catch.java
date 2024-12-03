package de.webdev.backend.model;

import java.util.List;

public record Catch(
        String id,
        String date,
        String location,
        String species,
        double size,
        double weight,
        String image,
        String favorite,
        List<String> notes,
        String author,
        String methode,
        String bait


) {
}
