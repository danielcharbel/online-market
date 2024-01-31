package dev.danielcharbel.onlinemarket.domain;

import static dev.danielcharbel.onlinemarket.domain.ProductOrderTestSamples.*;
import static dev.danielcharbel.onlinemarket.domain.ProductTestSamples.*;
import static dev.danielcharbel.onlinemarket.domain.ShoppingCartTestSamples.*;
import static org.assertj.core.api.Assertions.assertThat;

import dev.danielcharbel.onlinemarket.web.rest.TestUtil;
import org.junit.jupiter.api.Test;

class ProductOrderTest {

    @Test
    void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(ProductOrder.class);
        ProductOrder productOrder1 = getProductOrderSample1();
        ProductOrder productOrder2 = new ProductOrder();
        assertThat(productOrder1).isNotEqualTo(productOrder2);

        productOrder2.setId(productOrder1.getId());
        assertThat(productOrder1).isEqualTo(productOrder2);

        productOrder2 = getProductOrderSample2();
        assertThat(productOrder1).isNotEqualTo(productOrder2);
    }

    @Test
    void productTest() throws Exception {
        ProductOrder productOrder = getProductOrderRandomSampleGenerator();
        Product productBack = getProductRandomSampleGenerator();

        productOrder.setProduct(productBack);
        assertThat(productOrder.getProduct()).isEqualTo(productBack);

        productOrder.product(null);
        assertThat(productOrder.getProduct()).isNull();
    }

    @Test
    void cartTest() throws Exception {
        ProductOrder productOrder = getProductOrderRandomSampleGenerator();
        ShoppingCart shoppingCartBack = getShoppingCartRandomSampleGenerator();

        productOrder.setCart(shoppingCartBack);
        assertThat(productOrder.getCart()).isEqualTo(shoppingCartBack);

        productOrder.cart(null);
        assertThat(productOrder.getCart()).isNull();
    }
}
