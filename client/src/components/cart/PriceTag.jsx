import * as React from "react";

import { HStack, Text } from "@chakra-ui/react";

export function formatPrice(value, opts = {}) {
  const { locale = "en-US", currency = "USD" } = opts;
  const formatter = new Intl.NumberFormat(locale, {
    currency,
    style: "currency",
    maximumFractionDigits: 2,
  });
  return formatter.format(value);
}

export const PriceTag = (props) => {
  const { price, currency, rootProps, priceProps } = props;
  return (
    <HStack spacing="1" {...rootProps}>
      <Price size="md" textProps={priceProps}>
        {formatPrice(price, {
          currency,
        })}
      </Price>
    </HStack>
  );
};

const Price = (props) => {
  const { children, textProps } = props;
  return (
    <Text as="span" fontWeight="bold" color="gray.700" {...textProps}>
      {children}
    </Text>
  );
};
