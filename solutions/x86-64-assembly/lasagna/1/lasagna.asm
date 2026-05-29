; Everything that comes after a semicolon (;) is a comment

; Assembler-time constants may be defined using 'equ'

section .text

; You should implement functions in the .text section

; the global directive makes a function visible to the test files
global expected_minutes_in_oven
expected_minutes_in_oven:
    ; TODO: This function has no arguments
    ; and must return a number
    mov rax, 40 ; store 40 in rax
    ret ; return 40

global remaining_minutes_in_oven
remaining_minutes_in_oven:
    ; TODO: define the 'remaining_minutes_in_oven' function
    ; This function takes one number as argument and must return a number
    call expected_minutes_in_oven ; calling returns value to rax
    sub rax, rdi ; rdi has the arg to the func
    ret ; return as rax already contains the result

global preparation_time_in_minutes
preparation_time_in_minutes:
    ; TODO: define the 'preparation_time_in_minutes' function
    ; This function takes one number as argument and must return a number
    mov rax, 2 ; store 2 min/layer
    imul rax, rdi ; multiply by num_layers (rdi)
    ret ; return result stored in rax

global elapsed_time_in_minutes
elapsed_time_in_minutes:
    ; TODO: define the 'elapsed_time_in_minutes' function
    ; This function takes two numbers as arguments and must return a number
    ; rdi = numberOfLayers
    ; rsi = minutesInOven
    call preparation_time_in_minutes ;rax now has prepTime
    add rax, rsi ;add minutesInOven to prepTime
    ret ; return total

%ifidn __OUTPUT_FORMAT__,elf64
section .note.GNU-stack noalloc noexec nowrite progbits
%endif
