<?php 
    $debugging = true;
    if($debugging) {
        ini_set('display_errors', 1);
        ini_set('display_startup_errors', 1);
        error_reporting(E_ALL);
    }

    include_once("includes/header.php");
    include_once("basket.php");

    //get basket from session
    $session_basket = file_get_contents('basket');
    $products = array();
    if(!empty($session_basket)){        
        $basket = unserialize($session_basket);
        $products = $basket->getProduct();
    }    
    $product_names = array(
        'R01' => 'Red Widget',
        'B01' => 'Blue Widget',
        'G01' => 'Green Widget',
    );
?>

<body>
    <!-- main category section     -->
    <div class="container">
        <div class="row mb-3">
            <div class="col-md-3 text-center">
                <div class="product-item">
                    <span>Red Widget(R01)</span>
                    <br/>
                    <span>Price: $32.95</span>
                    <br/>
                    <a id="addRed" class="btn btn-primary mt-3"><span>Add to basket</span></a>
                </div>                
            </div>
            <div class="col-md-3 text-center">
                <div class="product-item">
                    <span>Blue Widget(B01)</span>
                    <br/>
                    <span>Price: $7.95</span>
                    <br/>
                    <a id="addBlue" class="btn btn-primary mt-3"><span>Add to basket</span></a>
                </div>                
            </div>
            <div class="col-md-3 text-center">
                <div class="product-item">
                    <span>Green Widget(G01)</span>
                    <br/>
                    <span>Price: $24.95</span>
                    <br/>
                    <a id="addGreen" class="btn btn-primary mt-3"><span>Add to basket</span></a>
                </div>                
            </div>
        </div>    
        <div class="row">
            <div class="col-md-3 text-center">
                <span>Basket</span>
                <ul class="add-list">
                    <?php
                        if(!empty($products)) {
                            foreach($products as $product) {
                                ?>
                                <li type="<?= $product ?>"><?= $product_names[$product] ?>(<?= $product ?>)<a class="remove"><i class="fa fa-minus"></i></a></li>
                                <?php
                            }
                        }
                    ?>
                </ul>
            </div>        
            <div class="col-md-9">
                <div class="row calculate-section">
                    <div class="col-md-2">
                        <a id="calculate" class="btn btn-primary"><span>Calculate</span></a>                
                    </div>
                    <div class="col-md-10">
                        <p id="totalCost"></p>
                    </div>
                </div>
            </div>    
        </div>            
    </div>
</body>

<?php
    include_once("includes/footer.php");
?>