#include "grains.h"

uint64_t square(uint8_t index){
    
    switch(index){
        case 0:
            return 0;
        case 1:
            return 1;
    }
    
    uint64_t num = 1;
    
    for(uint8_t i = 2; i <= index; i++){
        num *= 2;
    }
    
    return num;
}

uint64_t total(void){
    uint64_t sum = 0;
    for(uint8_t i = 1; i <= 64; i++){
        sum += square(i);
    }
    return sum;
}
