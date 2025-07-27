open Printf

let generate_random_number min max =
  Random.self_init ();
  min + Random.int (max - min + 1)

let rec play_game secret_number =
  print_string "Enter your guess: ";
  flush stdout;

  try
    let guess = read_int () in
    match compare guess secret_number with
    | 0 ->
        printf "Congratulations! You guessed the correct number: %d\n" secret_number
    | n when n < 0 ->
        printf "Too low! Try again.\n";
        play_game secret_number
    | _ ->
        printf "Too high! Try again.\n";
        play_game secret_number
  with
  | Failure _ ->
      print_endline "Invalid input. Please enter a valid integer.";
      play_game secret_number
