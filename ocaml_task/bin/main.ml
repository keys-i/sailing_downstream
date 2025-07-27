(* guessing_game.ml *)
open Guessing_game

let () =
  let secret = generate_random_number 1 100 in
  print_endline "Welcome to the Number Guessing Game!";
  print_endline "I'm thinking of a number between 1 and 100.";
  play_game secret
