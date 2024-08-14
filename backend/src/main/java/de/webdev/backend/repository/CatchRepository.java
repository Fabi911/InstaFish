package de.webdev.backend.repository;

import de.webdev.backend.model.Catch;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface CatchRepository extends MongoRepository<Catch, String> {
}
