Feature: Display a map  
    Scenario: The User start the simulation
        Given a map of size 25 per 25 with a biome "FULL_GRASS"
        When the User start the simulation
        Then I count 625 tiles of type "GRASS"
