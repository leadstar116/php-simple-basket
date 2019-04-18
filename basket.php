<?php

class Basket{
    private $total_cost;
    private $product_array;
    private $price;
    private $rule;

    /**
     * Constructor
     * set total_cost as 0     
     * set product_array as empty array
     * set price and rule
     */
    public function __construct(){
        $this->total_cost = 0;
        $this->product_array = array();
        $this->price = array(   // product code and cost
            'R01' => 32.95,
            'B01' => 7.95,
            'G01' => 24.95
        );
        $this->rule = array(    //first element is threshold value and second is delivery fee
            'max_threshold' => [90, 2.95],  
            'min_threshold' => [50, 4.95],
        );
    }

    /**
     * Add product to product_array
     *
     * @param string $type     type can be "R01", "B01", "G01"
     */
    public function addProduct($type) {  
        $this->product_array[] = $type;
    }

    /**
     * Get product_array
     *    
     */
    public function getProduct() {  
        return $this->product_array;
    }

    /**
     * Remove product from product_array
     *
     * @param string $type     type can be "R01", "B01", "G01"
     */
    public function removeProduct($type) {  
        foreach($this->product_array as $key => $product) {
            if($product == $type) {
                unset($this->product_array[$key]);
                break;
            }
        }
    }

    /**
     * Calculate total cost and return
     * calculate total cost based on initial offer( “buy one red widget, get the second half price”. )
     * 
     * No prameter
     * Return: total_cost
     */
    public function getTotalCost() {  
        $this->total_cost = 0;
        $red_already_exist = false;

        if(count($this->product_array) == 0) {
            return 0;
        }

        foreach($this->product_array as $product) {
            switch($product) {
                case 'R01':
                    if($red_already_exist) {
                        $this->total_cost += $this->price[$product] / 2;
                    } else {
                        $this->total_cost += $this->price[$product];
                    }
                    $red_already_exist = !$red_already_exist;
                    break;
                default:
                    $this->total_cost += $this->price[$product];
                    break;
            }
        }
        
        if($this->total_cost < $this->rule['min_threshold'][0]) { // under min value
            $this->total_cost += $this->rule['min_threshold'][1];
        } else if($this->total_cost < $this->rule['max_threshold'][0]) { // under min value
            $this->total_cost += $this->rule['max_threshold'][1];
        } else { //equal, more than max value
            $this->total_cost += 0; //fee is free
        }
        return number_format($this->total_cost, 3);
    }
}