open Guessing_game

let test_generate_random_number () =
  let min = 1 in
  let max = 100 in
  let random_number = generate_random_number min max in
  assert (random_number >= min && random_number <= max);
  Printf.printf "✓ generate_random_number produces number in range [%d, %d]: %d\n"
    min max random_number

let () =
  Printf.printf "Running OCaml task tests...\n";
  test_generate_random_number ();
  Printf.printf "All tests passed!\n"
