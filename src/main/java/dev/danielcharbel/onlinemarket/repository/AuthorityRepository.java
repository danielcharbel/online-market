package dev.danielcharbel.onlinemarket.repository;

import dev.danielcharbel.onlinemarket.domain.Authority;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Spring Data JPA repository for the {@link Authority} entity.
 */
public interface AuthorityRepository extends JpaRepository<Authority, String> {}
