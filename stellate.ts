import { Config } from 'stellate'

const config: Config = {
  "config": {
    "enablePlayground": true,
    "passThroughOnly": false,
    "scopes": {
      "AUTHENTICATED": "header:authorization"
    },
    "rootTypeNames": {
      "query": "Query",
      "mutation": "Mutation"
    },
    "rules": [
      {
        "types": [
          "App",
          "User",
          "Group",
          "Order",
          "Stock",
          "Address",
          "Channel",
          "Invoice",
          "Payment",
          "Webhook",
          "AppToken",
          "Checkout",
          "GiftCard",
          "OrderLine",
          "Warehouse",
          "OrderEvent",
          "ExportEvent",
          "Fulfillment",
          "Transaction",
          "AppExtension",
          "CheckoutLine",
          "PreorderData",
          "GiftCardEvent",
          "OrderDiscount",
          "PaymentSource",
          "DigitalContent",
          "UserPermission",
          "TransactionItem",
          "SaleChannelListing",
          "ProductChannelListing",
          "VoucherChannelListing",
          "SaleTranslatableContent",
          "CollectionChannelListing",
          "VoucherTranslatableContent",
          "ProductVariantChannelListing",
          "ShippingMethodTranslatableContent"
        ],
        "maxAge": 0,
        "swr": 0,
        "scope": "AUTHENTICATED",
        "description": "No cache for sensitive data"
      },
      {
        "types": {
          "Menu": [
            "privateMetadata",
            "privateMetafield",
            "privateMetafields"
          ],
          "Page": [
            "privateMetadata",
            "privateMetafield",
            "privateMetafields"
          ],
          "Sale": [
            "products",
            "variants",
            "collections",
            "channelListings",
            "privateMetadata",
            "privateMetafield",
            "privateMetafields"
          ],
          "Shop": [
            "limits",
            "version",
            "channelCurrencies",
            "defaultMailSenderName",
            "defaultMailSenderAddress",
            "limitQuantityPerCheckout",
            "defaultDigitalMaxDownloads",
            "defaultDigitalUrlValidDays",
            "staffNotificationRecipients",
            "reserveStockDurationAnonymousUser",
            "automaticFulfillmentDigitalProducts",
            "reserveStockDurationAuthenticatedUser"
          ],
          "Query": [
            "apps",
            "sale",
            "user",
            "sales",
            "stock",
            "orders",
            "plugin",
            "stocks",
            "payment",
            "plugins",
            "voucher",
            "channels",
            "giftCard",
            "payments",
            "vouchers",
            "checkouts",
            "customers",
            "giftCards",
            "warehouse",
            "exportFile",
            "staffUsers",
            "warehouses",
            "draftOrders",
            "exportFiles",
            "ordersTotal",
            "transaction",
            "translation",
            "appExtension",
            "giftCardTags",
            "shippingZone",
            "translations",
            "appExtensions",
            "checkoutLines",
            "orderSettings",
            "shippingZones",
            "webhookEvents",
            "digitalContent",
            "homepageEvents",
            "digitalContents",
            "permissionGroup",
            "giftCardSettings",
            "permissionGroups",
            "appsInstallations",
            "giftCardCurrencies",
            "reportProductSales"
          ],
          "Product": [
            "channelListings",
            "privateMetadata",
            "privateMetafield",
            "privateMetafields"
          ],
          "Voucher": [
            "products",
            "variants",
            "collections",
            "channelListings",
            "privateMetadata",
            "privateMetafield",
            "privateMetafields"
          ],
          "Category": [
            "privateMetadata",
            "privateMetafield",
            "privateMetafields"
          ],
          "MenuItem": [
            "privateMetadata",
            "privateMetafield",
            "privateMetafields"
          ],
          "PageType": [
            "hasPages",
            "privateMetadata",
            "privateMetafield",
            "privateMetafields",
            "availableAttributes"
          ],
          "Attribute": [
            "valueRequired",
            "availableInGrid",
            "privateMetadata",
            "privateMetafield",
            "privateMetafields",
            "visibleInStorefront",
            "filterableInDashboard",
            "filterableInStorefront",
            "storefrontSearchPosition"
          ],
          "Warehouse": [
            "privateMetadata",
            "privateMetafield",
            "privateMetafields"
          ],
          "Collection": [
            "channelListings",
            "privateMetadata",
            "privateMetafield",
            "privateMetafields"
          ],
          "ProductType": [
            "privateMetadata",
            "privateMetafield",
            "privateMetafields",
            "availableAttributes"
          ],
          "ShippingZone": [
            "privateMetadata",
            "privateMetafield",
            "privateMetafields"
          ],
          "ProductVariant": [
            "stocks",
            "revenue",
            "digitalContent",
            "channelListings",
            "privateMetadata",
            "quantityOrdered",
            "privateMetafield",
            "privateMetafields"
          ],
          "ShippingMethod": [
            "privateMetadata",
            "privateMetafield",
            "privateMetafields"
          ],
          "ShippingMethodType": [
            "channelListings",
            "privateMetadata",
            "excludedProducts",
            "privateMetafield",
            "privateMetafields"
          ]
        },
        "maxAge": 0,
        "swr": 0,
        "scope": "AUTHENTICATED",
        "description": "No cache for permission-locked data"
      },
      {
        "types": {
          "Query": [
            "menu",
            "shop",
            "menus",
            "product",
            "products",
            "productVariant",
            "productVariants"
          ]
        },
        "maxAge": 450,
        "swr": 900,
        "description": "Cache common queries"
      }
    ],
    "name": "saleor",
    "originUrl": "https://demo.saleor.io/graphql/"
  }
}

export default config;
