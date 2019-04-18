<?php
    include_once("basket.php");

    //get basket from session
    $session_basket = file_get_contents('basket');
    if(empty($session_basket)){
        $basket = new Basket;
    } else {
        $basket = unserialize($session_basket);
    }    

    $data = array();

    if (isset($_POST)) {
        if($_POST['type'] == 'addProduct') {
            $basket->addProduct($_POST['product']);
        } else if($_POST['type'] == 'removeProduct') {
            $basket->removeProduct($_POST['product']);
        } else if($_POST['type'] == 'getTotalCost') {
            $data['total_cost'] = $basket->getTotalCost();   
        }
    } else {
        $data['error'] = 'No post data';
    }

    $session_basket = serialize($basket);
    // store basket to session.
    file_put_contents('basket', $session_basket);
    echo json_encode($data);
?>